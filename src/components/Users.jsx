import React from 'react';

const Users = ({ user }) => {

    const { name, username, email, phone, website, address, company, id } = user;

    return (
        <div>
            <div className="group w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white">

                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                        {name}
                    </h2>
                    <p className="text-slate-400">@{username}</p>
                </div>

                {/* Contact */}
                <div className="space-y-2 text-sm text-slate-300 mb-4">
                    <p>Email: <span className="text-cyan-400">{email}</span></p>
                    <p>Phone: <span className="text-cyan-400">{phone}</span></p>
                    <p>Website: <span className="text-cyan-400">{website}</span></p>
                </div>

                {/* Address */}
                <div className="border-t border-slate-800 pt-4 mt-4 text-sm text-slate-400">
                    <p className="font-semibold text-slate-300 mb-1">Address</p>
                    <p>{address.street}, {address.suite}</p>
                    <p>{address.city}, {address.zipcode}</p>
                    <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
                </div>

                {/* Company */}
                <div className="border-t border-slate-800 pt-4 mt-4 text-sm text-slate-400">
                    <p className="font-semibold text-slate-300 mb-1">Company</p>
                    <p className="text-cyan-400 font-medium">{company.name}</p>
                    <p>{company.catchPhrase}</p>
                    <p className="italic">{company.bs}</p>
                </div>

                {/* ID badge */}
                <div className="absolute top-4 right-4 text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                    ID: {id}
                </div>
            </div>
        </div>
    );
};

export default Users;