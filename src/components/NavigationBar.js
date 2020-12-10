import React from 'react';

export default function NavigationBar({ title = 'Title', barItems = [{ label: 'Label', value: 'Value' }] }) {
    return (
        <div className="nav-bar-container">
            <div className="nav-title">{title}</div>
            <div className="nav-items">
                {
                    barItems.map(item => <a className="nav-items-item" key={item.label} href={item.link}>{item.label}</a>)
                }
            </div>
        </div>
    )
}