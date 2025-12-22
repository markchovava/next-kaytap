"Use client"
import { MetaInterface, MetaLinksInterface } from '@/_data/entity/ResponseEntity'
import ButtonPaginate from '../buttons/ButtonPaginate'




interface PaginationPrimaryInterface{
    links?: MetaLinksInterface, 
    meta?: MetaInterface,
    handlePaginate: (url: string) => void
}


export default function PaginationPrimary({
      links, 
      meta, 
      handlePaginate
  }: PaginationPrimaryInterface
) {
    const { prev, next } = links || { prev: null, next: null };

   
  return (
    !prev && !next ? "" :
    <section className="w-full flex items-center justify-end gap-3 mt-4">
        {prev ?
          <ButtonPaginate title='Prev' css="px-6 py-1" direction="left" onClick={() => handlePaginate(prev)}  />
          : ""
        }
        {next ?
          <ButtonPaginate title='Next' css="px-6 py-1" direction="right" onClick={() => handlePaginate(next)}  />
          : ""
        }
    </section>
  )
}
