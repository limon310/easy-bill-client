const BillDetailsSkeleton = () => {
    return (
        <div className="max-w-5xl mx-auto animate-pulse">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-8 bg-base-200 rounded-full" />
                <div className="flex flex-col gap-2">
                    <div className="h-6 w-48 bg-base-200 rounded" />
                    <div className="h-4 w-64 bg-base-200 rounded" />
                </div>
            </div>

            {/* Main Card */}
            <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm">

                {/* Image */}
                <div className="h-56 bg-base-200 rounded-t-xl" />

                {/* Body */}
                <div className="card-body p-6 space-y-6">

                    {/* Title + Category */}
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-base-200 rounded-xl" />
                        <div className="flex flex-col gap-2">
                            <div className="h-5 w-32 bg-base-200 rounded" />
                            <div className="h-4 w-24 bg-base-200 rounded" />
                        </div>
                    </div>

                    {/* Amount + Status */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="h-3 w-20 bg-base-200 rounded" />
                            <div className="h-8 w-32 bg-base-200 rounded" />
                        </div>
                        <div className="h-6 w-20 bg-base-200 rounded-full" />
                    </div>

                    <div className="divider bg-base-200" />

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="h-5 w-5 bg-base-200 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <div className="h-3 w-20 bg-base-200 rounded" />
                                    <div className="h-3 w-28 bg-base-200 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <div className="h-4 w-40 bg-base-200 rounded" />
                        <div className="h-3 w-full bg-base-200 rounded" />
                        <div className="h-3 w-full bg-base-200 rounded" />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        <div className="h-8 w-36 bg-base-200 rounded" />
                        <div className="h-8 w-28 bg-base-200 rounded" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BillDetailsSkeleton;
