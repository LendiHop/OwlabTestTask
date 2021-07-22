import React from 'react';
import s from './News.module.scss';
import {NewsBlock} from "./NewsBlock/NewsBlock";

export const News = () => {
    const news = [
        {title: "Social Network", icon: "https://static.vecteezy.com/system/resources/previews/000/264/225/non_2x/modern-flat-design-isometric-concept-of-social-network-vector.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title: "Todo List", icon: "https://miro.medium.com/max/2000/1*q9ytuylJQXMP-FaxjQyA1Q.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title: "Social Network", icon: "https://static.vecteezy.com/system/resources/previews/000/264/225/non_2x/modern-flat-design-isometric-concept-of-social-network-vector.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title: "Todo List", icon: "https://miro.medium.com/max/2000/1*q9ytuylJQXMP-FaxjQyA1Q.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title: "Social Network", icon: "https://static.vecteezy.com/system/resources/previews/000/264/225/non_2x/modern-flat-design-isometric-concept-of-social-network-vector.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {title: "Todo List", icon: "https://miro.medium.com/max/2000/1*q9ytuylJQXMP-FaxjQyA1Q.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    ];

    return (
        <div className={s.news}>
            <div className={s.container}>
                <div className={s.projects}>
                    {
                        news.map(i => <NewsBlock title={ i.title } icon={ i.icon } description={ i.description } />)
                    }
                </div>
            </div>
        </div>
    );
}
