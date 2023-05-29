import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectsData';
import Header from '../Titre/Header';
import './WorkDetail.css';

const WorkDetail: React.FC = () => {
  const { workName } = useParams();
  const project = projects.find((project) => project.name === workName);
  const nextproject = projects[(projects.findIndex((project) => project.name === workName) + 1) % projects.length].name;

  const imagesRef = useRef<HTMLImageElement[]>([]);
  let scrollSpeed = 0;
  let lastScrollY = window.pageYOffset;

  const calculateScrollSpeed = () => {
    const nowScrollY = window.pageYOffset;
    scrollSpeed = (nowScrollY - lastScrollY) * 0.1;
    lastScrollY = nowScrollY;
    return scrollSpeed;
  }

  const skewImages = () => {
    if (!imagesRef.current) return;
    const skewValue = calculateScrollSpeed();
    imagesRef.current.forEach((img) => {
      if (!img) return;
      img.style.transformOrigin = 'left';
      img.style.transform = `skewY(${Math.max(-5, Math.min(5, skewValue))}deg)`;
      img.style.transition = 'transform 0.2s ease-out';
    });

    requestAnimationFrame(skewImages);
  };

  useEffect(() => {
    let requestId = requestAnimationFrame(skewImages);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  useEffect(() => {
    if (!project) return;
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = project.backgroundColor;

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, [project]);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <section className="workPage">
      <Header title={[project.title, project.title, project.title, project.title, project.title, project.title]} />
      <div>
        <div>
          <div>
            <h3>{project.title}</h3>
            <span>{project.date}</span>
          </div>
          <p style={{ whiteSpace: 'pre-wrap' }}>{project.description}</p>
          <div>
            {project.link && (
              <>
                <span>Github :</span>
                <a href={project.link}>{project.link}</a>
                <svg width="25" height="16" viewBox="0 0 25 16" fill="none">
                  <g clipPath="url(#clip0_115_11)">
                    <path
                      d="M10.6029 13.5743C8.40251 14.4987 4.8246 15.3456 3.12999 15.3433C2.24808 15.342 1.65589 15.1898 1.10277 14.8222C-0.138441 13.9975 -0.101186 12.9447 1.15772 13.2677C2.99508 13.7389 7.63024 12.2561 11.5886 9.9307C14.0169 8.50441 17.6012 5.74191 17.5236 5.35657C17.5053 5.26532 17.059 5.21873 16.5323 5.25295C15.1725 5.34184 12.8293 4.93175 12.3726 4.52493C12.0945 4.27739 12.0738 4.08568 12.2983 3.84252C12.9073 3.18402 15.7731 1.97478 17.9756 1.44714C19.2038 1.15315 20.7891 0.684191 21.4986 0.405245C23.489 -0.377166 24.8478 0.269743 24.7796 1.96729C24.714 3.60289 22.5469 9.87698 21.4442 11.6241C20.8801 12.5178 20.6718 12.6908 20.0936 12.7454C19.41 12.8101 18.9011 12.4338 18.6624 11.6872C18.6011 11.4961 18.6453 10.6665 18.7604 9.84359L18.9697 8.34759L17.6782 9.36357C15.7863 10.852 12.6737 12.7045 10.6029 13.5743Z"
                      fill="#141937" />
                  </g>
                  <defs>
                    <clipPath id="clip0_115_11">
                      <rect width="25" height="15.4545" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
      {project.images.map((image, index) => (
        <div key={index}>
          <img className="imgSkew" ref={(el) => { imagesRef.current[index] = el!; }} src={image} alt="" />
        </div>
      ))}
      {project.video && (
        <div>
          <video width="900" height="500" controls>
            <source src={project.video} type="video/mp4" />
            Votre navigateur ne supporte pas l'élément <code>video</code>.
          </video>
        </div>
      )}
      <footer>
        <a href={`../works/${nextproject}`}>
          <Header title={["Projet Suivant", "Projet Suivant", "Projet Suivant", "Projet Suivant", "Projet Suivant", "Projet Suivant"]} />
        </a>
      </footer>
    </section>
  );
};

export default WorkDetail;
