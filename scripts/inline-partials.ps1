# Vuelve a incrustar los partials en index.html (después de editar partials/)
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

$html = Get-Content -LiteralPath 'index.html' -Raw -Encoding UTF8

# Si el index ya tiene las secciones inlined, este script NO las re-sincroniza
# automáticamente por marcadores. Usalo solo si restaurás los data-include.
$partials = @(
    @{ marker = '<div data-include="partials/aberturas-section.html"></div>'; file = 'partials/aberturas-section.html' },
    @{ marker = '<div data-include="partials/corralon-section.html"></div>'; file = 'partials/corralon-section.html' },
    @{ marker = '<div data-include="partials/muebles-section.html"></div>'; file = 'partials/muebles-section.html' },
    @{ marker = '<div data-include="partials/obras-section.html"></div>'; file = 'partials/obras-section.html' },
    @{ marker = '<div data-include="partials/testimonios-section.html"></div>'; file = 'partials/testimonios-section.html' },
    @{ marker = '<div data-include="partials/contacto-section.html"></div>'; file = 'partials/contacto-section.html' }
)

$found = 0
foreach ($p in $partials) {
    if ($html.Contains($p.marker)) {
        $content = (Get-Content -LiteralPath $p.file -Raw -Encoding UTF8).TrimEnd()
        $html = $html.Replace($p.marker, $content)
        Write-Host "Inlined $($p.file)"
        $found++
    }
}

if ($found -eq 0) {
    Write-Host "No hay marcadores data-include en index.html (ya está inlined)."
    exit 0
}

Set-Content -LiteralPath 'index.html' -Value $html -Encoding UTF8 -NoNewline
Write-Host "Listo."
