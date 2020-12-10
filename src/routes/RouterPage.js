import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { routers } from "../routes/routerMap";

// 这里可以做个循环，根据routerMap的配置，动态输入对应的Route里需要的属性和页面对应的组件数据
export function RouterPage() {
    return (
        <Router>
            <Switch>
                {
                    routers.map((item) => {
                        return (
                            <Route path={item.path} component={item.component} key={item.name}>
                                {
                                    item.children &&
                                    item.children.map(
                                        (child) => <Route path={child.path} component={child.component} key={child.name}></Route>
                                    )
                                }
                            </Route>
                        )
                    })
                }
            </Switch>
        </Router>
    );
}