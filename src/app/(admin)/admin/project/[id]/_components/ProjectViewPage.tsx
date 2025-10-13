"use client"
import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary";
import ImagePrimary from "@/_components/images/ImagePrimary";
import RecordPrimary from "@/_components/records/RecordPrimary";
import SpacerTertiary from "@/_components/spacers/SpacerTertiary";
import TitlePrimary from "@/_components/titles/TitlePrimary";
import { ProjectsData } from "@/_data/sample/ProjectsData";
import { useState } from "react";
import ProjectEditModal from "./ProjectEditModal";


    

export default function ProjectViewPage({id}: {id: string | number}) {
    const numId = Number(id)
    const dbData = ProjectsData.find((i) => i.id === numId)

    const [data, setData] = useState(dbData)
    const [isModal, setIsModal] = useState<boolean>(false)

    // Handle case where project is not found
    if (!data) {
        return (
            <section>
                <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
                    <TitlePrimary title='Project Not Found' />
                    <p className="text-gray-600 mt-4">The project with ID {id} could not be found.</p>
                </div>
            </section>
        )
    }

    return (
        <>
        <section className='mx-auto w-[92%] flex items-center justify-end'>
            <ButtonQuaternary 
                onClick={() => setIsModal(!isModal)}
                title='Edit Project' 
                css="px-8 py-3 text-white" 
            />
        </section>
        <SpacerTertiary />
        <section>
            <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">  
                <TitlePrimary title='View Project' />
                    <SpacerTertiary />
                <div className='flex flex-col items-start justify-center gap-4'>
                    {/* Project Images Gallery */}
                    {data.images && data.images.length > 0 && (
                        <div className="w-full">
                            <h3 className="font-light mb-2">Project Images:</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {data.images.map((image, index) => (
                                    <div key={index} className="aspect-square">
                                        <ImagePrimary img={image.image} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <RecordPrimary label="Name:" value={data.name} />
                    <RecordPrimary label="Address:" value={data.address} />
                    <RecordPrimary label="Contractor:" value={data.contractor} />
                    <RecordPrimary label="Client:" value={data.client} />
                    <RecordPrimary label="Category:" value={data.category} />
                    <RecordPrimary label="Status:" value={data.status} />
                    <RecordPrimary label="Description:" value={data.description ?? ""} />
                </div>
            </div>
        </section>

        <ProjectEditModal isModal={isModal} setIsModal={setIsModal} />

        </>
    )
}