import useClient from "hooks/useClient";
import * as React from "react";
import { Experience } from "types";
import { FiCalendar, FiBriefcase, FiMapPin } from "react-icons/fi";
import moment from "moment";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useMobile from "hooks/useMobile";

const ExperienceTimeline: React.FC = () => {
  const isMobile = useMobile();
  const [items, setItems] = React.useState<Experience[]>([]);
  const client = useClient();
  React.useEffect(() => {
    client
      .getEntries<Experience>({ content_type: "experience" })
      .then((res) => {
        setItems(res.items.map((item) => item.fields));
      });
    // eslint-disable-next-line
  }, []);
  const seprator = isMobile ? <br /> : "";
  return (
    <section id="experience">
      <div className="container">
        <VerticalTimeline animate={true} layout="1-column" lineColor="#f0f0f0">
          {items.map((item, key) => {
            const startDate = moment(item.startDate).format("MMM YYYY");
            const endDate = item.endDate
              ? moment(item.endDate).format("MMM YYYY")
              : "Present";
            return (
              <VerticalTimelineElement
                iconClassName="timeline-element-icon"
                key={key}
              >
                <div className="job-details">
                  <img
                    className="job-company-logo"
                    src={item.logoLink}
                    alt={item.company}
                  />
                  <div>
                    <h1 className="job-title">{item.title}</h1>
                    <h2 className="job-company-name">{item.company}</h2>
                  </div>
                </div>
                <p className="job-description">{item.description}</p>
                <div className="job-other">
                  <FiCalendar />
                  &nbsp;
                  {startDate}
                  &nbsp;-&nbsp;
                  {endDate}
                  &nbsp;
                  {seprator}
                  <FiBriefcase />
                  &nbsp;
                  {item.internship ? "Internship" : "Full-time"}
                  &nbsp;
                  {seprator}
                  <FiMapPin />
                  &nbsp;
                  {item.location}, India
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
