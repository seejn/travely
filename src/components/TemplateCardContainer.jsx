import templateInfos from "../data/templates.json";
const PATH_TO_TEMPLATE = "/init-templates/";
const TemplateCard = ({ urlLink, templateInfo }) => {
    console.log(templateInfo);
    const { id, pageName, fileName, description } = templateInfo;

    return (
        <>
            <a
                href={urlLink + fileName}
                className='text-gray-900 font-semibold hover:text-blue-700 flex-grow'>
                <div className='bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full'>
                    <div>
                        <h3>{pageName}</h3>
                        <p className='text-gray-500 text-sm'>{description}</p>
                    </div>
                </div>
            </a>
        </>
    );
};
const TemplateCardContainer = () => {
    return templateInfos?.map((templateInfo) => (
        <div key={templateInfo.id} className='flex flex-wrap justify-center'>
            <TemplateCard
                urlLink={PATH_TO_TEMPLATE}
                templateInfo={templateInfo}
            />
        </div>
    ));
};

export default TemplateCardContainer;
