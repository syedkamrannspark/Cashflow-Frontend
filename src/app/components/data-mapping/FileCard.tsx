import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronRight, Trash2 } from 'lucide-react';
import type { FileData } from '../../../types/data-mapping';
import { deleteUploadedFile } from '../../../services/api';

export function FileCard({ file, onSelect, onDelete }: { file: FileData; onSelect: () => void; onDelete?: (fileId: number) => void }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const statusStyles: Record<FileData['mappingStatus'], string> = {
        'Not Started': 'bg-gray-100 text-gray-700 border-gray-300',
        'In Progress': 'bg-amber-50 text-amber-700 border-amber-200',
        Mapped: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };

    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!window.confirm(`Are you sure you want to delete "${file.name}"?`)) {
            return;
        }

        setIsDeleting(true);
        setDeleteError(null);

        try {
            await deleteUploadedFile(file.id);
            console.log(`[FileCard] Successfully deleted file: ${file.name}`);
            onDelete?.(file.id);
        } catch (error: any) {
            const errorMessage = error?.message || 'Failed to delete file';
            setDeleteError(errorMessage);
            console.error(`[FileCard] Failed to delete file:`, error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div>
            {deleteError && (
                <div className="mb-2 rounded-lg bg-red-50 border border-red-200 p-2 text-xs text-red-700">
                    {deleteError}
                </div>
            )}
            <button
                className="group max-w-100 w-fit flex h-fit flex-col rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-[380ms] ease-in-out hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100"
                onClick={onSelect}
            >
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                            <span className="truncate" title={file.name}>{file.name}</span>
                            <span className="rounded-full bg-emerald-50 px-2 py-[2px] text-xs text-emerald-700 whitespace-nowrap">{file.type}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            {file.rows.toLocaleString()} rows • {file.columns} columns
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span
                            className={clsx(
                                'rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200',
                                statusStyles[file.mappingStatus]
                            )}
                        >
                            {file.mappingStatus}
                        </span>
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="flex-shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Delete file"
                            aria-label="Delete file"
                        >
                            {isDeleting ? (
                                <div className="w-4 h-4 border-2 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
                            ) : (
                                <Trash2 className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
                        <span>Preview</span>
                        <span className="flex items-center gap-1 text-emerald-600">
                            <ChevronRight className="h-3 w-3" />
                            Click to map
                        </span>
                    </div>
                    <div className="overflow-auto rounded-md border border-gray-200">
                        <table className="w-full border-collapse text-xs text-gray-900">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    {file.preview.columns.slice(0, 4).map((col) => (
                                        <th key={col} className="px-3 py-2 text-left font-medium">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {file.preview.rows.slice(0, 3).map((row, idx) => (
                                    <tr key={idx} className="border-t border-gray-200">
                                        {file.preview.columns.slice(0, 4).map((col) => (
                                            <td key={col} className="px-3 py-2 text-gray-700">
                                                {row[col]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </button>
        </div>
    );
}
