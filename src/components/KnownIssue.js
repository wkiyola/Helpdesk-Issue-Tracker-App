import React from 'react'

function KnownIssue({ symptom, workaround }) {
    return (
        <div className="known-issue">
            <h2>Symptom: {symptom}</h2>
            <p>Workaround: {workaround}</p>
        </div>
    )
}

export default KnownIssue
