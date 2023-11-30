import React from 'react'
import { BrowserRouter as Router, Routes as Routing, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Layout from '../components/Layout/Layout'
import Analytics from '../pages/Analytics/Analytics'
import Menu from '../pages/Menu/Menu'
import Orders from '../pages/Orders/Orders'
import Customers from '../pages/Customers/Customers'
const Routes = () => {
    return (
        <Router>
            <Routing>
                <Route path="/" element={
                    <Layout>
                        <Dashboard />
                    </Layout>
                } />
                <Route path="/menu" element={
                    <Layout>
                        <Menu />
                    </Layout>
                } />
                <Route path="/orders" element={
                    <Layout>
                        <Orders />
                    </Layout>
                } />
                <Route path="/customer" element={
                    <Layout>
                        <Customers />
                    </Layout>
                } />
                <Route path="/analytics" element={
                    <Layout>
                        <Analytics />
                    </Layout>
                } />
            </Routing>
        </Router>
    )
}

export default Routes

