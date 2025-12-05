import ReceiptsWidget from "./ReceiptsWidget";
import FinancialWidget from "./FinancialWidget";

export default function BossSection({ permissions }: any) {
    return (
        <div>
            <h3>Boss Overview</h3>

            <FinancialWidget />

            {/* Can approve receipts */}
            {permissions.approve && (
                <ReceiptsWidget title="Receipts awaiting approval" />
            )}

            {/* Can upload receipts too */}
            {permissions.upload && (
                <ReceiptsWidget title="Upload receipts" />
            )}
        </div>
    );
}
