import ReceiptsWidget from "./ReceiptsWidget";
import FinancialWidget from "./FinancialWidget";

export default function AccountantSection({ permissions }: any) {
    return (
        <div>
            <h3>Accountant</h3>

            <FinancialWidget />

            {permissions.upload && (
                <ReceiptsWidget title="Upload receipts" />
            )}
        </div>
    );
}
