import Link from 'next/link'
import React from 'react'
import BookCover from '@/components/BookCover'
import { cn } from '@/lib/utils'
import Image from "next/image";
import { Button } from './ui/button';

const BookCard = ({id,title,genre,coverColor,coverUrl,is_loanedBook=false,}:Book) => 
     
<li className={cn(is_loanedBook && 'xs:w-52 w-full')}>
    <Link href={'/book/${id}'} className={cn(is_loanedBook && 'w-full flex flex-col items-center')}>
        <BookCover coverColor={coverColor} coverImage={coverUrl}/>
            <div className={cn('mt-4',!is_loanedBook && 'xs:max-w-40 max-w-28')}>
                <p className='book-title'>{title}</p>
                <p className='book-genre'>{genre}</p>
            </div>
            {is_loanedBook && (
                <div className='mt-3 w-full'>
                    <div className='book-loaned'>
                        <Image src='/icons/calendar.svg' alt='calendar' width='18' height='18' className='object-contain'/>
                        <p className='text-light-100'>11 days</p>
                    </div>
                    <Button className='book-btn'>
                        Download reciept
                    </Button>
                </div>)}
    </Link>
</li>
  


export default BookCard