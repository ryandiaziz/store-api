const generateID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

const generateDate = () => {
    return new Date().toISOString()
}

const filterData = (datas) => {
    const filter = datas.reduce((p, c) => {
        if (!p.length) {
            p.push({
                penjualan_id: c.penjualan_id,
                tanggal_penjualan: c.tanggal_penjualan,
                nama_pembeli: c.nama_pembeli,
                hp_pembeli: c.hp_pembeli,
                total: c.total,
                barang: [
                    {
                        nama_barang: c.nama_barang,
                        harga_barang: c.harga_barang
                    }
                ]
            })
            return p
        }
        if (p[p.length - 1].penjualan_id === c.penjualan_id) {
            p[p.length - 1].barang.push({
                nama_barang: c.nama_barang,
                harga_barang: c.harga_barang
            })
            return p
        } else {
            p.push({
                penjualan_id: c.penjualan_id,
                tanggal_penjualan: c.tanggal_penjualan,
                nama_pembeli: c.nama_pembeli,
                hp_pembeli: c.hp_pembeli,
                total: c.total,
                barang: [
                    {
                        nama_barang: c.nama_barang,
                        harga_barang: c.harga_barang
                    }
                ]
            })
            return p
        }
    }, [])

    return filter
}

export {
    generateID,
    generateDate,
    filterData
}