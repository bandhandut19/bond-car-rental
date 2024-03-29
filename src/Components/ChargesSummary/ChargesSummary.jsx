import { useContext } from "react";
import { InitialContext } from "../Providers/IntialProvider";

const ChargesSummary = () => {
    const { cdw, li, rt } = useContext(InitialContext)
    return (
        <div className="border-2 border-purple-500 px-5 py-3 bg-purple-100 rounded-md overflow-x-auto">
            <table className="table">
                <thead className=" border-b-2 border-purple-600">
                    <tr  >

                        <th className="text-black">Charge</th>
                        <th className="text-black">Unit</th>
                        <th className="text-black">Rate</th>
                        <th className="text-black">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* daily */}
                    <tr>
                        <td>Daily</td>
                        <td>1</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    {/* weekly */}
                    <tr>
                        <td>Weekly</td>
                        <td>1</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>

                    {/* additonal charges */}
                    {
                        (cdw && <tr>
                            <td>Collision Damage Wavier</td>
                            <td></td>
                            <td>$9.00</td>
                            <td>$9.00</td>
                        </tr>)
                    }
                    {
                        (li && <tr>
                            <td>Liability Insurance</td>
                            <td></td>
                            <td>$15.00</td>
                            <td>$15.00</td>
                        </tr>)
                    }
                    {
                        (rt && <tr>
                            <td>Collision Damage Wavier</td>
                            <td></td>
                            <td>11.5%</td>
                            <td>tax amount</td>
                        </tr>)
                    }

                </tbody>

            </table>

        </div>
    );
};

export default ChargesSummary;