import React from "react";
import "./projectCell.scss";
import ProjectGithubLinkButton from "../projectGithubLinkButton/projectGithubLinkButton";
import DemoButton from "../demoButton/DemoButton";

export default function ProjectCell(props) {
    return (

        <div className="projectCellContainer">
            <div className="projectCell">

                <div className="projectCellTitle">
                    {props.projectTitle}
                </div>

                <div className="projectResume">
                    {props.projectResume}
                </div>

                <div className="projectCellButtons">


                    {props.demoLink !== "noDemo" &&
                    <div className="projectDemoButtonContainer">
                        <DemoButton buttonValue="Demo" demoLink={props.demoLink}/>
                    </div>
                    }


                    {props.goTo !== "noGoTo" &&
                    <div>
                        <ProjectGithubLinkButton goTo={props.goTo} pushes={props.pushes}/>
                    </div>
                    }

                </div>
            </div>
        </div>
    );
}

