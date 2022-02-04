import axios from "axios";
import * as React from "react";
import { Blog } from "types";
import Fade from "react-reveal/Fade";

const BlogList: React.FC = () => {
  const [blog, setBlogs] = React.useState<Blog[]>([]);
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@@bhaktijkoli"
      )
      .then((res) => {
        setBlogs(res.data.items as Blog[]);
        setTimeout(() => {
          setAnimate(true);
        }, 100);
      });
  }, []);
  return (
    <section id="blogList">
      <div className="container">
        {blog.map((blog, key) => {
          const description = blog.description
            .replace(/<figure>[\s\S]*<\/figure>/g, "")
            .replace(/<\/?[^>]+(>|$)/g, "");
          return (
            <Fade
              bottom
              delay={50 * key + 100}
              distance="10%"
              duration={500}
              key={blog.guid}
              when={animate}
            >
              <div
                className="blog"
                onClick={() => window.open(blog.link, "_blank")}
              >
                <div className="blog-details">
                  <img className="blog-thumbnail" src={blog.thumbnail} />
                  <div>
                    <h1 className="blog-title">{blog.title}</h1>
                    <div className="blog-description">{description}</div>
                    <div className="blog-tags">
                      {blog.categories.map((category) => {
                        return (
                          <div className="tag" key={category}>
                            {category}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
