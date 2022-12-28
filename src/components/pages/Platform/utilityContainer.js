import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AudioModal from "../../AudioRecorder/AudioModal";

export default function UtilityContainer({ workspaceConfig }) {

    const [isToggle, setToggle] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const setModalOpen = (e) => {
        e.preventDefault();
        setOpen(!isOpen)
        console.log("this is from modal")
        console.log(isOpen);
    }

    const toggleSwitch = (e) => {
        e.preventDefault();
        console.log("hello this is from toggle switch")
        setToggle(!isToggle)
    }

    const features = {
        utility_widget: 10,
        project_management_widget: 20,
        collaboration_widget: 30,
        specification_widget: 40,
        content_management_widget: 50,
        user_pick_widget: 60,
        module_widget: 70
    }

    useEffect(() => {

        // var utility_container_tools = document.getElementsByClassName("utility_container_tools");
        // for (let el of utility_container_tools) el.style.display = 'none';

        var utility_widget = document.getElementsByClassName("utility_widget");
        var project_management_widget = document.getElementsByClassName("project_management_widget");
        var collaboration_widget = document.getElementsByClassName("collaboration_widget");
        var specification_widget = document.getElementsByClassName("specification_widget");
        var content_management_widget = document.getElementsByClassName("content_management_widget");
        var user_pick_widget = document.getElementsByClassName("user_pick_widget");
        var module_widget = document.getElementsByClassName("module_widget");

        for (let el of utility_widget) el.style.display = 'none';
        for (let el of project_management_widget) el.style.display = 'none';
        for (let el of collaboration_widget) el.style.display = 'none';
        for (let el of specification_widget) el.style.display = 'none';
        for (let el of content_management_widget) el.style.display = 'none';
        for (let el of user_pick_widget) el.style.display = 'none';
        for (let el of module_widget) el.style.display = 'none';

        if (workspaceConfig != undefined && workspaceConfig.featureIds != undefined) {
            console.log("utilityContainer : ", workspaceConfig.featureIds);
            if (workspaceConfig.featureIds.includes(features.utility_widget)) {
                for (let el of utility_widget) el.style.display = 'block';
            }
            if (workspaceConfig.featureIds.includes(features.project_management_widget)) {
                for (let el of project_management_widget) el.style.display = 'block';
            }
            if (workspaceConfig.featureIds.includes(features.collaboration_widget)) {
                for (let el of collaboration_widget) el.style.display = 'block';
            }
            if (workspaceConfig.featureIds.includes(features.specification_widget)) {
                for (let el of specification_widget) el.style.display = 'block';
            }
            if (workspaceConfig.featureIds.includes(features.content_management_widget)) {
                for (let el of content_management_widget) el.style.display = 'block';
            }
            if (workspaceConfig.featureIds.includes(features.user_pick_widget)) {
                for (let el of user_pick_widget) el.style.display = 'block';
            }
            if (workspaceConfig.featureIds.includes(features.module_widget)) {
                for (let el of module_widget) el.style.display = 'block';
            }
        }
    })

    return (
        <div className='utility_container' style={{ padding: '4px 10px', border: '1px solid blue', backgroundColor: '#003060' }}>
            <div className='utility_container_tools' >

                <div className='utility_widget' style={{ fontSize: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='first_row_utility' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='uitility_text' style={{ fontSize: '0.5em', marginTop: '1em' }}>
                            <span className='utility_text_name'>Utility</span>
                        </div>
                        <div className='utility_btn' style={{ display: 'flex' }}>
                            <div className='cross_1'>
                                <i class="bi bi-plus"></i>
                            </div>
                            <div className='cross_2'>
                                <i class="bi bi-plus"></i>
                            </div>
                            <div className='check'>
                                <i class="bi bi-check"></i>
                            </div>
                        </div>
                    </div>
                    <div className='second_row_utility' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='left_btn'>
                            <div className='toggle_btn' style={{ marginRight: '0.5em' }}>
                                <button style={{ background: 'transparent', border: 'none' }} onClick={(e) => toggleSwitch(e)}>{!isToggle ? <i class="bi bi-toggle-off"></i> : <i class="bi bi-toggle-on"></i>}</button>
                            </div>
                        </div>
                        <div className='right_btn' style={{ display: 'flex' }}>
                            <div className='search_btn' style={{ marginRight: '0.5em' }}>
                                <i class="bi bi-search"></i>
                            </div>
                            <div className='security_btn' style={{ marginRight: '0.5em' }}>
                                <i class="bi bi-shield"></i>
                            </div>
                            <div className='star_btn' style={{ marginRight: '0.5em' }}>
                                <i class="bi bi-star"></i>
                            </div>

                            <div className='search_btn_second'>
                                <i class="bi bi-search"></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='project_management_widget' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='second_row_project_management' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='second_row_project_text'>
                            <span className='project_text'>
                                Project Management Widget
                            </span>
                        </div>
                        {/*       <div className='second_row_widgets'>
                      <span className='project_widget'>
                         Widgets
                      </span>
</div> */}


                    </div>
                    <div className='second_row_project_icon' style={{ display: 'flex', justifyContent: 'space-between', fontSize: '2em' }}>
                        {/* <div className='second_row_project_icon_file' onClick={()=>setShowTrelloPortal(true)}> */}
                        <Link to="/trello" className='second_row_project_icon_file'>
                            <i className="bi bi-file-earmark-richtext"></i>
                        </Link>
                        <Link to="/notes" className='second_row_project_icon_attach'>
                            <i className="bi bi-paperclip"></i>
                        </Link>
                        <div className='second_row_project_icon_mic' onClick={(e) => setModalOpen(e)}>
                            <i className="bi bi-mic"></i>
                        </div>
                        <div className='second_row_project_icon_link'>
                            <i className="bi bi-link-45deg"></i>
                        </div>
                        <div className='second_row_project_icon_location'>
                            <i class="bi bi-geo-alt"></i>
                        </div>
                        <Link to="/video" className='second_row_project_icon_camera'>
                            <i class="bi bi-camera"></i>
                        </Link>


                    </div>
                </div>

                <div className='collaboration_widget' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='thord_row_text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='third_row_text_collaboration'>
                            <span className='collaboration_text'>Collaboration Widget</span>
                        </div>
                        {/*      <div className='third_row_text_widget'>
                      <span className='widget_text'>Widget</span>
</div> */}


                    </div>
                    <div className='third_row_icon' style={{ display: 'flex', justifyContent: 'space-between', fontSize: '2em' }}>
                        <Link to="/analytic" className='third_row_icon_mail'>
                            {/* <div className='third_row_icon_mail'> */}
                            <i className="bi bi-envelope"></i>
                            {/* </div> */}
                        </Link>
                        <Link to="/chat" className='third_row_icon_message'>
                            {/* <div className='third_row_icon_message'> */}
                            <i className="bi bi-chat-left-text"></i>
                            {/* </div> */}
                        </Link>
                        <div className='third_row_icon_share'>
                            <i className="bi bi-share"></i>
                        </div>

                        <div className='third_row_icon_calender'>
                            <i className="bi bi-calendar-month"></i>
                        </div>

                        <div className='third_row_icon_call'>
                            <i className="bi bi-telephone"></i>
                        </div>

                        <Link to="/screenShare" className='third_row_icon_tv' >
                            <i className="bi bi-tv"></i>
                        </Link>

                    </div>

                </div>

                <div className='specification_widget' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='fourth_row_text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='fourth_row_text_specification'>
                            <span className='text_specification'>
                                Specification Widget
                            </span>

                        </div>
                        {/*    <div className='fourth_row_text_widget'>
                <span className='text_widget'>
                    Widget
                 </span>
              
</div> */}


                    </div>
                    <div className='fourth_row_icon' style={{ display: 'flex', justifyContent: 'space-between', fontSize: '2em' }}>
                        <div className='fourth_row_icon_booster'>
                            <i class="bi bi-arrow-repeat"></i>
                        </div>
                        <div className='fourth_row_icon_board'>
                            <i className="bi bi-clipboard"></i>
                        </div>
                        <div className='fourth_row_icon_projector'>
                            <i className="bi bi-cast"></i>
                        </div>
                        <div className='fourth_row_icon_file'>
                            <i className="bi bi-file"></i>
                        </div>
                        <div className='fourth_row_icon_book'>
                            <i className="bi bi-book"></i>
                        </div>
                        <div className='fourth_row_icon_headphone'>
                            <i className="bi bi-headphones"></i>
                        </div>
                    </div>
                </div>

                <div className='content_management_widget' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='fifth_row_text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='fifth_row_text_content_management'>
                            Content Management Widget
                        </div>
                        {/*  <div className='fifth_row_text_widget'>
                         Widget
</div> */}

                    </div>
                    <div className='fifth_row_icon' style={{ display: 'flex', justifyContent: 'space-between', fontSize: '2em' }}>
                        <div className='fifth_row_icon_blog'>
                            <i className="bi bi-blockquote-left"></i>

                        </div>

                    </div>

                </div>

                <div className='user_pick_widget' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='sixth_row_text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='fifth_row_text_user_pick'>
                            User Pick
                        </div>
                    </div>

                </div>

                <div className='module_widget' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#0047ab' }}>
                    <div className='seventh_row_text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='seventh_row_text_module_widget'>
                            Module Widget
                        </div>
                    </div>
                </div>
            </div>

            <div className='utility_canvas' style={{ backgroundColor: '#A9A9A9', color: '#FFFFFF', marginTop: '9em' }}>
                <div className='canva_first_row' style={{ marginTop: '2em', padding: '4px 10px', border: '1px solid blue', backgroundColor: '#A9A9A9' }}>
                    <div className='canva_first_row_text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='canva_first_row_text_content_uitilityCanvas'>
                            Utility Canvas
                        </div>
                    </div>
                </div>
                <div className='canva_second_row' style={{ padding: '4px 10px', border: '1px solid blue', display: 'flex', backgroundColor: '#A9A9A9', color: '#FFFFFF' }}>
                    <div className='left_canvas_box' style={{ flex: '1 1 0' }}>
                        <div className='left_canvas_box_one' style={{ border: '1px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Left Box One </div>
                        <div className='left_canvas_box_two' style={{ border: '1px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >Left Box Two</div>
                        <div className='left_canvas_box_three' style={{ border: '1px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Left Box Three</div>

                    </div>
                    <div className='right_canvas_box' style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        File Uplaod
                    </div>
                </div>
            </div>

            {isOpen && <AudioModal isopen={isOpen} />}
        </div>
    )
}
