import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { useNavigate, useParams } from 'react-router-dom'
import { Alert, Space, message, Button, Popconfirm } from 'antd';
import { Helmet } from "react-helmet";

const ModalComp = () => {
    const [Datas, setDatas] = useState([])
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`).then((response) => setDatas(response.data))
    }, [])
    const [messageApi, contextHolder] = message.useMessage();
    const [confirmLoading, setConfirmLoading] = useState(false);


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Uğurla silindi',
        });
    };

    const showPopconfirm = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);

            axios.delete(`http://localhost:8000/blogs/${id}`)
            success()
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{Datas.blogTitle}</title>
                <link rel="canonical" href="/blogs" />
            </Helmet>
            {contextHolder}
            {/* <Space>
                <Button onClick={success}>Success</Button>
            </Space> */}

            <Card key={Datas.blogTitle}
                title={Datas.blogTitle}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                {/* <p>{e.title}</p> */}
                <p style={{ color: 'red' }}>{Datas.blogBody}</p>
                <p>by: {Datas.blogAuthor}</p>
                <Popconfirm
                    title="Delete?"
                    description="həqiqətəndə bu gözəl blog u silmək istiyirsiz?"
                    open={open}
                    onConfirm={handleOk}
                    okButtonProps={{
                        loading: confirmLoading,
                    }}
                    onCancel={handleCancel}
                >
                    <Button type="primary" onClick={showPopconfirm}>
                        Delete
                    </Button>
                </Popconfirm>
            </Card>
        </div >
    )
}

export default ModalComp