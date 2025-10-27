import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/headerComponent/header.css';
import TaskLogo from '../assets/Image/TaskLogo.svg';
import ExecutorLogo from '../assets/Image/ExecutorsLogo.svg';
import BalancerLogo from '../assets/Image/BalancerLogo.svg';
import DashboardLogo from '../assets/Image/DashboardLogo.svg';
import ParametresLogo from '../assets/Image/ParametresLogo.svg';

function Header() {
    return (
        <aside className="sidebar">
            {/* Логотип */}
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span className="sidebar-title">Zunami Executor</span>
                </div>
            </div>

            {/* Основное меню */}
            <nav className="sidebar-nav">
                <div className="nav-section">
                    <div className="nav-section-title">Основное</div>

                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <img src={DashboardLogo} alt="Dashboard" />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/tasks" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <img src={TaskLogo} alt="tasks" />

                        <span>Задачи</span>
                    </NavLink>

                    <NavLink to="/executors" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <img src={ExecutorLogo} alt="executors" />
                        <span>Исполнители</span>
                    </NavLink>



                    <NavLink to="/balancer" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <img src={BalancerLogo} alt="balancers" />
                        <span>Балансировщик</span>
                    </NavLink>
                </div>

                {/* Система */}
                <div className="nav-section">
                    <div className="nav-section-title">Система</div>



                    <NavLink to="/parametrs" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <img src={ParametresLogo}/>
                        <span>Параметры</span>
                    </NavLink>
                </div>
            </nav>
        </aside>
    );
}

export default Header;
