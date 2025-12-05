import ReceiptsWidget from "./ReceiptsWidget";

export default function AssistantSection({ permissions }: any) {
    return (
        <div>
            <h3>Assistant</h3>

            {permissions.upload ? (
                <ReceiptsWidget title="Upload receipts" />
            ) : (
                <p>You do not have permission to upload receipts.</p>
            )}
        </div>
    );
}
