export default (req, res) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=86400, stale-while-revalidate'
  )

  res.end(
    JSON.stringify({
      server: true,
    })
  )
}
