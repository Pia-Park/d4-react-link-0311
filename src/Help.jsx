import React from 'react'
import { Route, Link} from 'react-router-dom'

const HelpCustomer = () => <h2>Help customer</h2>
const HelpHost = () => <h2>Help Host</h2>


const Help = () => {
    return (
        <div>
            <div>
                <Link to="/help/customer">I am a customer</Link><br />
                <Link to="/help/host">I am a host</Link>

            </div>
            <p>An image</p>
            <Route path="/help/customer" component={HelpCustomer} />
            <Route path="/help/host" component={HelpHost} />


        </div>
    )
}

export default Help
