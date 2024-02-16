// import Header from "./components/Header";
const PATH_TO_TEMPLATE = "/init-templates/";

const Template = ({ templateInfo }) => {
    console.log(templateInfo);
    const { id, pageName, fileName, description } = templateInfo;

    return (
        <>
            <a
                href={PATH_TO_TEMPLATE + fileName}
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
function App() {
    const templateCardContainer = templateInfos?.map((templateInfo) => (
        <div key={templateInfo.id} className='flex flex-wrap justify-center'>
            <Template templateInfo={templateInfo} />
        </div>
    ));
    return (
        <>
            {/* <Header /> */}
            <div className='container mx-auto p-8'>
                <h1 className='text-3xl text-center font-bold mb-8'>
                    Reference Templates
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {templateCardContainer}
                </div>
            </div>

            {/* <!-- Preview Button --> */}
            <div className='my-8 flex justify-center'>
                <a
                    href='#'
                    className='my-8 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
                    Preview Application
                </a>
            </div>
        </>
    );
}

export default App;
