import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
    const navigation = useNavigate()
    return (
        <div>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary" onClick={() => {
                    navigation('/')
                }}>Back Home</Button>}
            />
        </div>
    )
}

export default ErrorPage