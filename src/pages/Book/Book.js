import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Book() {
    const obj = useParams();

    console.log(obj);

    return <h1>Book</h1>;
}

export default Book;
