import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import appConfig from '../config.json'
import React from 'react'
import { useRouter } from 'next/router'

function Title(arg) {
  const Tag = arg.tag || h1
  return (
    <>
      <Tag>{arg.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['400']};
          font-size: 24px;
          line-height: 28px;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default function PaginaInicial() {
  const roteamento = useRouter()
  const [username, setUsername] = React.useState('AnaLuizaMarques')
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage:
            'url(https://www.themoviedb.org/t/p/original/LBf1w7Yf544vwrwSwQc4poX6l6.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply'
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[500]
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={infoDoEvento => {
              infoDoEvento.preventDefault()
              roteamento.push('/chat')
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            <Title tag="h1">Welcome back, Modern Family!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[400]
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={e => {
                const valor = e.target.value
                setUsername(valor)
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[400],
                  mainColorHighlight: appConfig.theme.colors.primary[400],
                  backgroundColor: appConfig.theme.colors.neutrals[800]
                }
              }}
              styleSheet={{
                marginLeft: '5px'
              }}
            />

            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[100],
                mainColor: appConfig.theme.colors.neutrals[400],
                mainColorLight: appConfig.theme.colors.primary[100],
                mainColorStrong: appConfig.theme.colors.primary[100]
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[400],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px'
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px'
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[400],
                backgroundColor: appConfig.theme.colors.neutrals[800],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  )
}
