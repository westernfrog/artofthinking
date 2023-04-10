import ProjectItem from "./ProjectItem";

export default function Projects(params) {
  return (
    <>
      <div className="mt-5 pt-5">
        <h1 className="display-5 text-uppercase">Projects</h1>
        <p className="mb-0">
          In this section you will find some projects of mine. I invite you to
          read.
        </p>
      </div>
      <div className="mt-5">
        <ProjectItem
          title="Life Transforming Workshops"
          desc="I have taken up Life Transforming Workshops to offer a supportive community where teenagers and young adults can attend workshops on various aspects of mental health, such as stress, anxiety, body shaming, peer pressure, relationship issues, workload, bullying, anger management, handling failures, setting smart goals, resolving conflicts, and navigating dilemmas. By participating in these workshops, they experienced personal growth, increased self-empowerment, self-confidence, and self- management."
        />
        <ProjectItem
          title="Social Work Counselling"
          desc="As a social work enthusiast, I conducted a survey and community practicum during Covid-19 to assess the mental health status of the people living in slums and underprivileged zones. The main motive behind this project was to understand the multidimensional losses as created by the pandemic to the deprived section of the society. After certain engagements with children, women and few middle-aged men and listening to their concerns, we discussed some practical solutions which can be helpful to them in terms of taking care of their emotional distress and anxieties. Moreover, towards the end of the project, a positive and relaxing expressions were observed on their faces."
        />
        <ProjectItem
          title="Expressive Arts Sessions"
          desc="In Expressive Arts Sessions, I involved high school and college students to explore their sub- conscious emotions through certain modules like play, music, dance, art, writing, and mindfulness therapies and techniques. By gaining knowledge in and practicing these areas, the participants were able to enhance self-awareness, facilitate self-healing, gain empowerment, experience relaxation, improve emotional wellness, and adopt a positive attitude towards life."
        />
        <ProjectItem
          title="Content Writing and Creation"
          desc="I have written and created multiple content for spreading mental health awareness and building up strategies to help people understand the need to consider and make mental health care as their priority. The types of content which I am familiar with include articles, blogs, infographics, brochures, flyers, presentations, videos, book reviews, business listings, social media captions and research papers. I have also written an E-book on Art Therapy (to be published soon)."
        />
      </div>
    </>
  );
}
