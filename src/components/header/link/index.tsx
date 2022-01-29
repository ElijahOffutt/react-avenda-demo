// MAIN LINK COMPONENT FOR THE MAIN HEADER 
// ACCEPTS: A link object 

import React  from 'react';
import Link from 'next/link'

export default function MainLink(props: any) {
    return (
        <Link href={props.meta.path}>
            <a>{props.meta.text}</a>
        </Link>
    )
}