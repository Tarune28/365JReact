import BlogCard from "../blogcard/BlogCard";

// cover images
import blog22Cover from "../../../img/blogs/immersion/cover.png"
import moment from "moment";
import { useEffect, useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";


function HomePreview(props) {

  let date = new Date();

  let [listBlogs, setListBlogs] = useState([]);

  useEffect(populateEvents, []);

    function populateEvents() {
        RequestUtils.get("http://localhost:8080/blog/previews") // send out post req and get the response from server
        .then(response => response.json()) // take response and turn it into JSON object
        .then(data => { // data = JSON object created ^^
            if (!data.ok) {
                alert("Events could not be populated!");
                return;
            }
            setListBlogs(data.arr);


        })
        .catch(error => { 
            alert("Something went wrong! 176");
        }); 
    }

  let testObj = {
    _id: "aisdhfioasdf",
    title: "Title",
    bannerURL: "https://i.imgur.com/TFQ6tfg.jpeg",
    date: moment(date),
    description: "blogDescription",
    category: "blogCategory",
    icon: "fa-pencil"
  }
  

  return (
    <section className="blog_area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3>
            <a id="target">Recent Blogs</a>
          </h3>
          <p>365ToJapan blogs are posted 1-2 times weekly.</p>
        </div>
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
        <div className="area-heading">
          <a
            type="button" class="btn btn-secondary"
            style={{ width: "50%", borderRadius: "15px" }}
            href="blogpage.html"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePreview;
