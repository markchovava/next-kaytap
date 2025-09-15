"use client"
import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary";
import Heading4 from "@/_components/headings/Heading4";
import { useState } from "react"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TabData = [
  { id: 1, title: "Details", isOpen: true },
  { id: 2, title: "User Reviews & Ratings", isOpen: false }
]

const dummyReviews = [
  {
    id: 1,
    email: "john.doe@example.com",
    rating: 5,
    message: "Excellent product! Really happy with the quality and fast delivery. Would definitely recommend to others.",
    date: "2024-03-15"
  },
  {
    id: 2,
    email: "sarah.smith@example.com", 
    rating: 4,
    message: "Good value for money. The product works as expected, though shipping took a bit longer than anticipated.",
    date: "2024-03-10"
  },
  {
    id: 3,
    email: "mike.johnson@example.com",
    rating: 5,
    message: "Outstanding quality and customer service. This exceeded my expectations in every way.",
    date: "2024-03-08"
  }
]

const detailsData = [
    { name: "Material", description: "High-quality aluminum alloy with premium finish" },
    { name: "Dimensions", description: "15cm x 10cm x 5cm (L x W x H)" },
    { name: "Weight", description: "250 grams" },
    { name: "Color Options", description: "Available in Black, Silver, and Space Gray" },
    { name: "Warranty", description: "2-year manufacturer warranty included" },
    { name: "Compatibility", description: "Works with all major operating systems" }
]

export default function ProductDetailsTab() {
  const [tab, setTab] = useState(TabData)
  const [reviewForm, setReviewForm] = useState({
    email: "",
    message: "",
    rating: 5
  })
  const [reviews, setReviews] = useState(dummyReviews)

  const handleTab = (id: number) => {
    const updated = tab.map((i) =>
      i.id === id ? { ...i, isOpen: true } : { ...i, isOpen: false }
    )
    setTab(updated)
  }

  const handleSubmitReview = (e: any) => {
    e.preventDefault()
    
    const newReview = {
      id: reviews.length + 1,
      email: reviewForm.email,
      rating: reviewForm.rating,
      message: reviewForm.message,
      date: new Date().toISOString().split('T')[0]
    }
    
    setReviews([newReview, ...reviews])
    setReviewForm({ email: "", message: "", rating: 5 })
  }

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, index) => {
      const starNumber = index + 1
      return (
        <button
          key={index}
          type={interactive ? "button" : undefined}
          onClick={interactive ? () => setReviewForm(prev => ({ ...prev, rating: starNumber })) : undefined}
          className={`${
            starNumber <= rating ? "text-yellow-400" : "text-gray-300"
          } ${interactive ? "hover:text-yellow-400 cursor-pointer" : ""} text-lg`}
          disabled={!interactive}
        >
          {starNumber <= rating ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-300" /> }
        </button>
      )
    })
  }

  return (
    <section>
      <ul className="w-full flex items-center justify-start font-medium">
        {tab.map((i) => (
          <li
            key={i.id}
            onClick={() => handleTab(i.id)}
            className={`${
              i.isOpen ? "bg-gray-200" : ""
            } cursor-pointer w-60 text-sm py-3 px-4 border-x border-t border-gray-300 text-gray-700 
              hover:bg-gray-200 ease-in duration-200`}
          >
            {i.title}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      {tab.find((t) => t.isOpen)?.id === 1 && (
        <div className="w-full border border-gray-300">
          <div className="grid grid-cols-3 bg-gray-100">
            <div className="col-span-1 border-r border-gray-300 px-4 py-3 font-semibold text-gray-800">
              PROPERTY
            </div>
            <div className="col-span-2 px-4 py-3 font-semibold text-gray-800">DESCRIPTION</div>
          </div>
          {detailsData.map((item, key) => (
            <div
              key={key}
              className="w-full border-t border-gray-300 grid grid-cols-3 hover:bg-gray-50"
            >
              <div className="col-span-1 border-r border-gray-300 px-4 py-3 font-medium text-gray-700">
                {item.name}
              </div>
              <div className="col-span-2 px-4 py-3 text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>
      )}

      {tab.find((t) => t.isOpen)?.id === 2 && (
        <div className="w-full border border-gray-300">
          {/* Review Form */}
          <form onSubmit={handleSubmitReview} className="p-6 border-b border-gray-300">
            
            <Heading4 title="Write a Review" css="mb-4 text-gray-800" />
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={reviewForm.email}
                onChange={(e) => setReviewForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Review Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={reviewForm.message}
                onChange={(e) => setReviewForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
                placeholder="Share your experience with this product..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex items-center gap-1">
                {renderStars(reviewForm.rating, true)}
                <span className="ml-2 text-sm text-gray-600">({reviewForm.rating} out of 5 stars)</span>
              </div>
            </div>

           <ButtonPrimary title="Submit" css="text-white px-10 py-3" />
          </form>

          {/* Reviews List */}
          <div className="p-6">
            
            <Heading4 title={`Customer Reviews (${reviews.length})`} css="mb-6 text-gray-800" />
            
            {reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review this product!</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700">{review.email}</span>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                        <span className="ml-1 text-sm text-gray-600">({review.rating}/5)</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

    </section>
  )
}