import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb ,Icon} from 'antd';
import menus from '../config/menus';

const BreadCrumb = (props) => {
    const createBreadCrumbData = (location, data) => {
        let arrA = [];
        let arrB = [];
        let arrC = [];
        data.forEach(a => {
            if (location.pathname === a.path) {
                arrA.push(a);
            }
            if (a.children && a.children.length > 0) {
                a.children.forEach(b => {
                    if (location.pathname === b.path) {
                        arrB.push(b);
                        arrA.push({
                            icon: a.icon || '',
                            path: a.path,
                            title: a.title
                        });
                    }
                    if (b.children && b.children.length > 0) {
                        b.children.forEach(c => {
                            if (location.pathname === c.path) {
                                arrC.push(c);
                                arrB.push({
                                    icon: b.icon || '',
                                    path: b.path,
                                    title: b.title
                                });
                                arrA.push({
                                    icon: a.icon || '',
                                    path: a.path,
                                    title: a.title
                                });
                            }
                        });
                    }
                });
            }
        });
        return [...arrA, ...arrB, ...arrC];
    };
    const { location } = props;
    const routes = createBreadCrumbData(location, menus);
    if (!routes.length) return null;
    const itemRender = (route, params, routes) => {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <Link to={route.path}>{route.icon && <Icon type={route.icon} />} {route.title}</Link> : <span>{route.icon && <Icon type={route.icon} />} {route.title}</span>;
    };
    return (
        <div className="breadCrumb" style={{ margin: '16px 0' }}>
            <Breadcrumb routes={routes} itemRender={itemRender} />
        </div>
    );
};

export default withRouter(BreadCrumb);
