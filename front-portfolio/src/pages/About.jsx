import CommonInnerSectionLayoutLeftSide from "../components/layouts/CommonInnerSectionLayoutLeftSide";
import CommonInnerSectionLayoutRightSide from "../components/layouts/CommonInnerSectionLayoutRightSide";
import CommonSectionLayout from "../components/layouts/CommonSectionLayout";
import CommonSidebarLayout from "../components/layouts/CommonSidebarLayout";


const About = () => {


    return (
        <section className="container-main">
            <CommonSidebarLayout>

            </CommonSidebarLayout>
            <CommonSectionLayout>
                <CommonInnerSectionLayoutLeftSide>

                </CommonInnerSectionLayoutLeftSide>
                <CommonInnerSectionLayoutRightSide>

                </CommonInnerSectionLayoutRightSide>
            </CommonSectionLayout>
        </section>
    );
};

export default About;
