import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Space } from 'antd';
import { Helmet } from "react-helmet";
import './index.scss'


const HomePage = () => {
  const [Data, setData] = useState([])
  const [LoadingData, setLoadingData] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:8000/blogs`).then((response) => {
      setData(response.data)

    }).then(() => {
      setLoadingData(false)
    })
  }, [])

  return (
    <>
      {LoadingData ?
        (<Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>) : (

          <div className="site-card-border-less-wrapper">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Home Page</title>
              <link rel="canonical" href="/blogs" />
            </Helmet>
            {Data.map((e, i) => {
              return (
                <>
                  <Link to={`/details/${e.id}`} key={e.blogTitle}>
                    <Card key={i}
                      title={e.blogTitle}
                      bordered={false}
                      style={{
                        width: 300,
                      }}
                    >
                      <p>{e.title}</p>
                      <p style={{ color: 'red' }}>{e.blogBody}</p>
                      <p>by: {e.blogAuthor}</p>
                    </Card>
                  </Link>
                </>
              )
            })}
          </div>
        )}
    </>
  )
}

export default HomePage