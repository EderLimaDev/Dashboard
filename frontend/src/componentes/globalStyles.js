import {createGlobalStyle} from 'styled-components'

const EstilosGlobais = createGlobalStyle `
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background: #0d86a2;
        overflow-x: hidden;
        text-decoration: none;
    }
    .mb-1{
        padding-top: 3rem;
        font-weight:bold;
        font-size:1.5em;
    }

    .tableHeader{
        text-align:center;
        font-size: 1.5rem;
    }

    .tbodyField{
        text-align:center;
    }
    .form-label{
        text-align:center;

    }

    .containerNewDevice{
        background-color:#0b305e;
        font-size:1.5rem;
        border-radius: 12px;
        padding:20px 20px;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: #0B4C5F;
        color: white;
        border: 3px solid white;
        transition: all 0.5s ease;
        &:hover{
            background-color: black;
            color: white;
        }
    }

    h3{
        color: black;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    label{
        color: black;
        font-weight: bold;
    }
 

`;

export default EstilosGlobais