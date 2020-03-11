import React from 'react';
import style from './Projects.module.css';
import SectionTitle from '../SectionTitle/SectionTItle';
import Project from './Project/Project';
import todolistPic from './../../assets/projects/todolist_bw.png';
import networkPic from './../../assets/projects/network_bw.png';
import pic2048 from './../../assets/projects/2048_logo.svg';

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: '2048',
                delay: 200,
                img: pic2048,
                link: 'https://deluxe1cookie.github.io/2048/',
                description: '19-летний итальянский разработчик Габриэле Чирулли (Gabriele Cirulli) создал ' +
                    'чрезвычайно захватывающую игру 2048, скрестив тетрис и «пятнашки».',
                todo: 'Поиграть!'
            },
            {
                title: 'Социальная сеть',
                delay: 400,
                img: networkPic,
                //   link: '',
                description: 'Небольшая социальная сеть на React.',
                todo: 'В разработке'
            },
            {
                title: 'Список дел',
                delay: 600,
                img: todolistPic,
                // link: '',
                description: 'Удобный todolist для людей.',
                todo: 'В разработке'
            }
        ],
        sectionTitleLinesColors: ['#00a800']
    };

    render() {
        const projectElement = this.state.projects.map(p => {
            return <Project title={p.title} delay={p.delay} img={p.img} link={p.link} description={p.description}
                            todo={p.todo}/>;
        });

        return (
            <div id="projects" className={style.projects}>
                <div className={style.container}>

                    <SectionTitle title={`Мои Проекты`} linesColors={this.state.sectionTitleLinesColors}/>

                    <div className={style.projectsWrap}>
                        {projectElement}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
