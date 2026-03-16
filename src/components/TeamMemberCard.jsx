import React from "react";
import '../assets/css/TeamMemberCard.css'

const TeamMemberCard = ({ image, name, designation }) => {
    return (
        <div className="teamCard">
            <div className="teamInnerWrapper">
                <div className="teamCardProfileImgWrapper">
                    <div className="teamCardProfileImg">
                        <img src={image} alt={name} width="200" height="200" />
                    </div>
                    <div className="socialBtns">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.53906 12H0.177734V4.4082H2.53906V12ZM1.3457 3.39258C0.609375 3.39258 0 2.75781 0 1.99609C0 0.955078 1.11719 0.294922 2.03125 0.828125C2.46289 1.05664 2.7168 1.51367 2.7168 1.99609C2.7168 2.75781 2.10742 3.39258 1.3457 3.39258ZM11.3496 12H9.01367V8.31836C9.01367 7.42969 8.98828 6.3125 7.76953 6.3125C6.55078 6.3125 6.37305 7.25195 6.37305 8.24219V12H4.01172V4.4082H6.27148V5.44922H6.29688C6.62695 4.86523 7.38867 4.23047 8.53125 4.23047C10.918 4.23047 11.375 5.80469 11.375 7.83594V12H11.3496Z" fill="white"></path></svg>
                    </div>
                </div>

                <div className="cs_team_member_info">
                    <h3 className="cs_team_member_name cs_fs_24 cs_semibold cs_mb_4">
                        {name}
                    </h3>

                    <p className="cs_team_member_designation cs_fs_14 mb-0">
                        {designation}
                    </p>
                </div>


            </div>

            <div className="cs_team_member_shape cs_accent_color">
                <svg
                    width="300"
                    height="407"
                    viewBox="0 0 300 407"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0.498047V407H300V212.548C175.575 177.381 69.7706 101.188 0 0.498047Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </div>
    );
};

export default TeamMemberCard;