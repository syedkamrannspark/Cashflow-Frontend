import React from 'react';
import { Folder, FileText, CheckCircle2, Trash2, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import type { FolderData } from '../../../types/data-mapping';

interface FolderCardProps {
    folder: FolderData;
    onSelect: () => void;
    onDelete?: () => void;
    isDeleting?: boolean;
}

export function FolderCard({ folder, onSelect, onDelete, isDeleting }: FolderCardProps) {
    const progressColor =
        folder.mappingProgress === 100
            ? 'text-emerald-600'
            : folder.mappingProgress > 0
                ? 'text-amber-600'
                : 'text-gray-600';

    return (
        <Card
            className="group h-fit cursor-pointer overflow-hidden border-gray-200 bg-white transition-all hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100"
            onClick={onSelect}
        >
            <CardContent className="p-4">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition-colors group-hover:bg-emerald-100">
                        <Folder className="h-6 w-6 text-emerald-600 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-1 text-xs font-medium ${progressColor}`}>
                            {folder.mappingProgress === 100 && <CheckCircle2 className="h-3.5 w-3.5" />}
                            {folder.mappingProgress}%
                        </div>
                        {onDelete && (
                            <button
                                aria-label="Delete folder"
                                disabled={isDeleting}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete();
                                }}
                                className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 transition-colors hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isDeleting ? (
                                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                ) : (
                                    <Trash2 className="h-3.5 w-3.5" />
                                )}
                                <span>Delete</span>
                            </button>
                        )}
                    </div>
                </div>

                <h3 className="mb-1 truncate text-base font-semibold text-gray-900 group-hover:text-emerald-700">
                    {folder.name}
                </h3>

                <p className="mb-3 text-xs text-gray-600">{folder.uploadDate}</p>

                <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                        <FileText className="h-3.5 w-3.5" />
                        {folder.fileCount} {folder.fileCount === 1 ? 'file' : 'files'}
                    </span>
                    <span>•</span>
                    <span>{folder.totalRows.toLocaleString()} rows</span>
                </div>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-all duration-500"
                        style={{ width: `${folder.mappingProgress}%` }}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
