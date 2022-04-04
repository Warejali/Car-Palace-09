import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2410,
            "revenue": 8401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4230,
            "revenue": 9500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 5260,
            "revenue": 40010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 9290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 8010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6700,
            "revenue": 61000
        }
    ]
    

    return (

        <div className="flex container mt-20">
            <div className="composedChart">
                <ComposedChart width={700} height={400} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="sell" fill="#FAEBD7" stroke="#228B22"/>
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>
            </div>
            <div className="pieChart">
                <PieChart width={500} height={400}>
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;