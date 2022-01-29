import React from "react";
import {Container, Header, Footer} from '@components';

export default function PublicLayout (props: any){
    return (
        <Container>
            <Header />
            {props.children}
            <Footer />
        </Container>
    )
}