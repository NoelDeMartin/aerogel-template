<template>
    <header class="mx-auto flex w-full max-w-screen-md items-center justify-between gap-2 px-4 pt-8 md:px-0">
        <h1>
            <Link route="home" class="text-2xl font-semibold tracking-tight">
                {{ $t('app.title') }}
            </Link>
        </h1>
        <div class="grow" />
        <ErrorLogs />
        <Account />
    </header>
</template>
