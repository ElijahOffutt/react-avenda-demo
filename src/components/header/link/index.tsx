// MAIN LINK COMPONENT FOR THE MAIN HEADER 
// ACCEPTS: A link object 

import React  from 'react';
import Link from 'next/link'

export default function MainLink(props: any) {
    return (
        <>
            {props.meta.hasLinks ? 
                (
                    <div className="dropdown">
                        <div tabindex='0' className="m-1">{props.meta.text}</div> 
                        <ul tabindex='0' className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            { props.meta.links.map( (link: any) => (
                                <Link href={link.path}>
                                    <li>
                                        <a>{link.text}</a>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )
                :
                (
                    <Link href={props.meta.path}>
                        <a>{props.meta.text}</a>
                    </Link>
                )
            }
        </>
    )
}