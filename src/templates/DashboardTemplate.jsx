import PageLayout from "../components/PageLayout";
import PackageItem from "../components/Package_item";

const Dashboard = () => {
    return (
        <>
            <PageLayout children={<PackageItem />} />
        </>
    );
};
export default Dashboard;
