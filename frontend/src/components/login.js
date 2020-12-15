import React, { useState, useContext } from "react"
import { gql, useMutation } from 'graphql-tag'
import StoreContext from "../util/store"

export const LOGIN_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
            id
            token
        }
    }
`

const Login = () => {
    const { setCustomerAccessToken } = useContext(StoreContext)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [message, setMessage] = useState(``)
}