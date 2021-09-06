import React, { useState } from 'react'
import AddCategory from '../components/Home/AddCategory'
import Navbar from '../components/Home/Navbar'

function Home() {

    const [mainDropDOwn, setMainDropDOwn] = useState([]);
    const [secondDropDown, setsecondDropDown] = useState([]);
    const [thirdDropDown, setThirdDropDown] = useState([]);
    return (
        <div>
            <Navbar
                mainDropDOwn={mainDropDOwn}
                secondDropDown={secondDropDown}
                thirdDropDown={thirdDropDown} />
            <AddCategory
                mainDropDOwn={mainDropDOwn}
                secondDropDown={secondDropDown}
                thirdDropDown={thirdDropDown}
                setMainDropDOwn={setMainDropDOwn}
                setsecondDropDown={setsecondDropDown}
                setThirdDropDown={setThirdDropDown} />
        </div>
    )
}

export default Home
