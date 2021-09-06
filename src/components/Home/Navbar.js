import React, { useState } from 'react'
import '../../style/Home.css'

function Navbar({ mainDropDOwn, secondDropDown, thirdDropDown }) {

    const [secondDD, setsecondDD] = useState(false);
    const [secondChildDD, setsecondChildDD] = useState(false);
    const [thirdDD, setThirdDD] = useState(false);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbarWrapper">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Navbar
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setsecondDD(!secondDD, setsecondChildDD(false), setThirdDD(false))} class="nav-link active" aria-current="page" href="#">
                                First Level
                                {secondDD
                                    ? <i class="ms-1 fas fa-caret-up"></i>
                                    : <i class="ms-1 fas fa-caret-down"></i>}
                            </a>
                        </li>

                    </ul>

                    {secondDD &&
                        <div className="customDropDown">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                                <a onClick={() => setsecondChildDD(!secondChildDD, setThirdDD(false))} href="#" class="list-group-item list-group-item-action">
                                    Second Level
                                    {secondChildDD
                                        ? <i class="ms-1 fas fa-caret-up"></i>
                                        : <i class="ms-1 fas fa-caret-down"></i>}
                                </a>
                                {mainDropDOwn.map(menu => (
                                    <a href="#" class="list-group-item list-group-item-action">{menu}</a>
                                ))}

                            </div>
                        </div>}

                    {secondChildDD &&
                        <div className="customChildDropDown">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                                <a href="#" onClick={() => setThirdDD(!thirdDD)} class="list-group-item list-group-item-action">
                                    Third Level
                                    {thirdDD
                                        ? <i class="ms-1 fas fa-caret-up"></i>
                                        : <i class="ms-1 fas fa-caret-down"></i>}
                                </a>
                                {secondDropDown.map(menu => (
                                    <a href="#" class="list-group-item list-group-item-action">{menu}</a>
                                ))}
                            </div>
                        </div>}

                    {thirdDD &&
                        <div className="thirdLevelDD">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                                <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                                {thirdDropDown.map(menu => (
                                    <a href="#" class="list-group-item list-group-item-action">{menu}</a>
                                ))}
                            </div>
                        </div>}

                    <div class="d-flex">

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
