import React, { ChangeEvent, useEffect, useRef } from 'react';
import type { ColumnMapping, SqlType } from '../../../types/data-mapping';

const sqlTypes: SqlType[] = [
    'INTEGER',
    'BIGINT',
    'FLOAT',
    'DECIMAL',
    'VARCHAR',
    'TEXT',
    'BOOLEAN',
    'DATE',
    'TIMESTAMP',
    'JSON'
];

export function ColumnMappingRow({
    column,
    connectionOptions = [],
    connectionDisabled = false,
    targetGroupName,
    onChange,
    onSelectTarget,
    onToggleHelper
}: {
    column: ColumnMapping;
    connectionOptions?: string[];
    connectionDisabled?: boolean;
    targetGroupName: string;
    onChange: (updates: Partial<ColumnMapping>) => void;
    onSelectTarget: () => void;
    onToggleHelper: (isHelper: boolean) => void;
}) {
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (descriptionRef.current) {
            descriptionRef.current.style.height = 'auto';
            descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
        }
    }, [column.description]);

    const handleDescriptionResize = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const element = event.currentTarget;
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
        onChange({ description: element.value });
    };

    return (
        <div className="grid grid-cols-12 items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 h-fit">
            <div className="col-span-12 sm:col-span-3">
                <p className="text-xs uppercase text-gray-500">Column</p>
                <p className="font-semibold text-gray-900">{column.name}</p>
            </div>
            <div className="col-span-12 sm:col-span-3">
                <label className="text-xs uppercase text-gray-500">Data Type</label>
                <select
                    value={column.selectedType}
                    onChange={(event) => onChange({ selectedType: event.target.value as SqlType })}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-emerald-500"
                >
                    {sqlTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-span-12 sm:col-span-3">
                <label className="text-xs uppercase text-gray-500">Connection_key</label>
                <select
                    value={column.connectionKey}
                    onChange={(event) => onChange({ connectionKey: event.target.value })}
                    disabled={connectionDisabled || connectionOptions.length === 0}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-emerald-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400"
                >
                    <option value="">None</option>
                    {connectionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {(connectionDisabled || connectionOptions.length === 0) && (
                    <p className="mt-1 text-xs text-gray-400">
                        {connectionDisabled
                            ? 'Connection key available only within an upload batch.'
                            : 'No other file columns available'}
                    </p>
                )}
            </div>
            <div className="col-span-12 sm:col-span-3">
                <label className="text-xs uppercase text-gray-500">Alias</label>
                <input
                    value={column.alias}
                    onChange={(event) => onChange({ alias: event.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-emerald-500"
                    placeholder="Friendly name"
                />
            </div>
            <div className="col-span-12">
                <p className="text-xs uppercase text-gray-500">Prediction role</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                    <label className="inline-flex items-center gap-2">
                        <input
                            type="radio"
                            name={targetGroupName}
                            checked={Boolean(column.isTarget)}
                            onChange={onSelectTarget}
                            className="h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                        />
                        Field to predict
                    </label>
                    <label className={column.isTarget ? 'inline-flex items-center gap-2 text-gray-400' : 'inline-flex items-center gap-2'}>
                        <input
                            type="checkbox"
                            checked={Boolean(column.isHelper)}
                            onChange={(event) => onToggleHelper(event.target.checked)}
                            disabled={Boolean(column.isTarget)}
                            className="h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500 disabled:cursor-not-allowed"
                        />
                        Fields that help to predict
                    </label>
                </div>
            </div>
            <div className="col-span-12 ">
                <label className="text-xs uppercase text-gray-500">Description <span className='text-red-500'>*</span></label>
                <textarea
                    ref={descriptionRef}
                    value={column.description}
                    onChange={handleDescriptionResize}
                    className="mt-1 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-emerald-500"
                    placeholder="Context for this column"
                    rows={2}
                />
            </div>
        </div>
    );
}
