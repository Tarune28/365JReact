import BlogCard from "../blogcard/BlogCard";
import { Tabs } from 'antd';
// import '~antd/dist/antd.css';
// cover images
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import { ConfigProvider } from 'antd';
import { Button } from "react-bootstrap";
import moment from "moment";
import "./AllBlogsPreview.css";

function AllBlogsPreview(props) {

  let date = new Date();

  let [listBlogs, setListBlogs] = useState([]);

  useEffect(() => {
    populateEvents(20);
    
  }, [])

  function populateEvents(days) {
 
    let req = days;
    RequestUtils.get("/blog/getCards?days=" + req) // send out post req and get the response from server
    .then(response => response.json()) // take response and turn it into JSON object
    .then(data => { // data = JSON object created ^^
        if (!data.ok) {
            alert("Blogs could not be populated!");
            return;
        }
        for(let i = 0; i < data.arr.length; i++){
          data.arr[i].animationType = true;
        }
        setListBlogs(data.arr);
        console.log(data.arr)
  

    })
    .catch(error => { 
        alert(error);
    }); 
}
const callbackTabClicked = (key, event) => {

  if (key === '1') {
    populateEvents(0);
    console.log(listBlogs);
  }
  if (key === '2') {
    populateEvents(1);
    console.log(listBlogs);
  }
  if (key === '3') {
    populateEvents(2);
    console.log(listBlogs);
  }
  if (key === '4') {
    populateEvents(3);
    console.log(listBlogs);
  }
};


    

  return (
<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <section className="blog_area area-padding portfolio-grid grid-sizer">
      <div className="container">
        <div className="area-heading margin-top-5">
          <h3>
            <a id="target">All Blogs</a>
          </h3>
          <p>365ToJapan blogs are posted 1-2 times weekly.</p>
        </div>

        <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#01B093',
      },
    }}
  >
        <Tabs defaultActiveKey="1" onTabClick={callbackTabClicked}>
    <Tabs.Items tab="All Time" key="1">
    <div className="row portfolio_area mt-4">
          <div className="row portfolio-grid">
          {
                listBlogs.map((singularBlogPost) => {
                    return (
                      <BlogCard blogInfo={singularBlogPost}/>
                    );
                })
            }
          </div>
    </div>
    
    </Tabs.Items>
    <Tabs.Items tab="Past Month" key="2">
    <div className="row portfolio_area area-padding portfolio-grid grid-sizer">
          <div className="row portfolio-grid">
    {
                listBlogs.map((singularBlogPost) => {
                    // Code that runs for each element
                    // TODO: Create delete handler
                    return (
                      <BlogCard blogInfo={singularBlogPost}/>
                    );
                })
            }
             </div>
    </div>
    </Tabs.Items>
    <Tabs.Items tab="Past 6 Months" key="3">
    <div className="row portfolio_area area-padding">
          <div className="row portfolio-grid">
    {
                listBlogs.map((singularBlogPost) => {
                    // Code that runs for each element
                    // TODO: Create delete handler
                    return (
                      <BlogCard blogInfo={singularBlogPost}/>
                    );
                })
            }
             </div>
    </div>
    </Tabs.Items>
    <Tabs.Items tab="Past Year" key="4">
    <div className="row portfolio_area area-padding">
          <div className="row portfolio-grid">
    {
                listBlogs.map((singularBlogPost) => {
                    // Code that runs for each element
                    // TODO: Create delete handler
                    return (
                      <BlogCard blogInfo={singularBlogPost}/>
                    );
                })
            }
            </div>
    </div>
    </Tabs.Items>
  </Tabs>
  </ConfigProvider>


     
      
      </div>
    </section>
    </>
  );
}

export default AllBlogsPreview;
