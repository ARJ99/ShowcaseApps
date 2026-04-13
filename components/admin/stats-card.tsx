import { cn } from "@/lib/utils"



export const StatsCard = ({all, approved, pending, rejected}:{
    all:number, 
    approved:number, 
    pending:number, 
    rejected:number}) => {

    const stats = [
        {
            label: 'Total',
            count: all,
            color: 'bg-primary/10'
        },
        {
            label: 'Pending ',
            count: pending,
            color: 'bg-yellow-500/10'
        },
        {
            label: 'Approved',
            count: approved,
            color: 'bg-green-500/10'
        },
        {
            label: 'Rejected',
            count: rejected,
            color: 'bg-rec-500/10'
        },
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                stats.map(({ label, count, color }) => (
                    <div key={label} className={cn("status-badge-card", color)}>
                        <p className="text-sm text-muted-foreground mb-1">{label}</p>
                        <p className="text-3xl font-bold">{count}</p>
                    </div>
                ))
            }

        </div>
    )
}
