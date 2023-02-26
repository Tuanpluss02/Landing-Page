import { SplideSlide } from "@splidejs/react-splide";
import React from 'react';


const DisplayMember = (props) => {
    const { data } = props;
    return (
        <div
            style={{
                background: "var(--black-gradient)",
                borderRadius: "20px",
                margin: "0 50px",
                padding: "10px",
            }}
        >
            <div key={data.id} className="flex flex-col px-4 items-center">
                {/* Image */}
                <img
                    key={data.id}
                    src={data.image}
                    alt={data.name}
                    className="w-[100px] h-[100px] rounded-[50%] mb-4 cursor-pointer object-contained"
                    onClick={() => window.open(data.link)}
                />
                {/* Name */}
                <h4 className="
                    font-poppins font-medium
                    text-[16px] leading-[25px]
                    text-white text-center">
                    {data.name}
                </h4>
                {/* Role */}
                <h4
                    className="
                    font-poppins font-medium
                    text-[16px] leading-[25px]
                    text-white text-center
                    opacity-50"
                    style={{ fontStyle: "italic" }}
                >
                    {data.role}
                </h4>
                {/* Social */}
                <div className="flex flex-row">
                    <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
                        <a href={data.github}>
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </dic>
                    <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
                        <a href={data.linkedin}>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </dic>
                    <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
                        <a href={data.web}>
                            <i class="fa-solid fa-image-portrait"></i>
                        </a>
                    </dic>
                </div>
            </div>
        </div>

    );
};

const MemberSlide = ({ data }) => {
    return (
        <SplideSlide>
            <DisplayMember data={data} />
            
        </SplideSlide>
    );
};

export default MemberSlide;
